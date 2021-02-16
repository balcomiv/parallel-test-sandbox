Write-Output "";
Write-Output "Clearing Old Reports...";
Write-Output "--------------------------------------------------------------------------------";
npm run clear-unit-test-results

Write-Output "";
Write-Output "Starting PR Test Suite...";
Write-Output "--------------------------------------------------------------------------------";
$elapsed = [System.Diagnostics.Stopwatch]::StartNew()

# https://stackoverflow.com/questions/2224350/powershell-start-job-working-directory
Start-Job -Init([ScriptBlock]::Create("Set-Location '$PSScriptRoot'")) -Script { npm run test:administration:pr }
Start-Job -Init([ScriptBlock]::Create("Set-Location '$PSScriptRoot'")) -Script { npm run test:gatling:pr }
Start-Job -Init([ScriptBlock]::Create("Set-Location '$PSScriptRoot'")) -Script { npm run test:tools:pr }
Start-Job -Init([ScriptBlock]::Create("Set-Location '$PSScriptRoot'")) -Script { npm run test:vendors:pr }

While (Get-Job -State "Running") {  
    write-host "Sleeping"
    Start-Sleep 5
}

# Getting the information back from the jobs
Get-Job | Receive-Job

# Cleanup
Remove-Job *

$elapsed = $elapsed.Elapsed.ToString()
Write-Output "";
write-host "Total Elapsed Time: $($elapsed)"