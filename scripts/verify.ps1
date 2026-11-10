$ErrorActionPreference = 'Stop'
$root = Resolve-Path (Join-Path $PSScriptRoot '..')
$app = Join-Path $root 'launcher'
Get-ChildItem (Join-Path $app 'js') -Filter '*.js' -Recurse | ForEach-Object {
  node --check $_.FullName
  if ($LASTEXITCODE -ne 0) { throw "Syntax failed: $($_.FullName)" }
}
$info = Get-Content -Raw (Join-Path $app 'appinfo.json') | ConvertFrom-Json
foreach ($field in @('id','version','vendor','type','main','title','icon','largeIcon')) {
  if (-not $info.$field) { throw "Missing appinfo field: $field" }
}
$html = Get-Content -Raw (Join-Path $app 'index.html')
$matches = [regex]::Matches($html, '(?:href|src)="([^"]+)"')
foreach ($match in $matches) {
  $path = Join-Path $app $match.Groups[1].Value
  if (-not (Test-Path -LiteralPath $path)) { throw "Missing reference: $($match.Groups[1].Value)" }
}
$brandMatches = Select-String -Path (Join-Path $app 'js\core\store.js') -Pattern "asset:'([^']+)'" -AllMatches
foreach ($item in $brandMatches.Matches) {
  $asset = Join-Path $app ('assets\brands\' + $item.Groups[1].Value)
  if (-not (Test-Path -LiteralPath $asset)) { throw "Missing brand asset: $asset" }
}
$bannedJs = '=>|\b(let|const)\s+|\bclass\s+[A-Za-z_$]|\bPromise\b|\bfetch\s*\(|\x60'
$bannedCss = 'backdrop-filter|var\(--|display\s*:\s*grid|\bgap\s*:'
$jsHits = Get-ChildItem (Join-Path $app 'js') -Filter '*.js' -Recurse | Select-String -Pattern $bannedJs
$cssHits = Get-ChildItem (Join-Path $app 'css') -Filter '*.css' -Recurse | Select-String -Pattern $bannedCss
if ($jsHits) { $jsHits | Format-Table; throw 'Banned JavaScript syntax found' }
if ($cssHits) { $cssHits | Format-Table; throw 'Banned CSS feature found' }
Write-Output 'Launcher verification passed.'

