Write-Output "";
Write-Output "Clearing Old Reports...";
Write-Output "--------------------------------------------------------------------------------";
# npm run clear-unit-test-results

Write-Output "";
Write-Output "Starting PR Test Suite...";
Write-Output "--------------------------------------------------------------------------------";
$elapsed = [System.Diagnostics.Stopwatch]::StartNew()

ng test --watch false --browsers ChromeHeadless

$elapsed = $elapsed.Elapsed.ToString()
Write-Output "";
write-host "Total Elapsed Time: $($elapsed)"
