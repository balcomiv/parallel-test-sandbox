# https://devblogs.microsoft.com/powershell/powershell-foreach-object-parallel-feature/

# & echo "";
# & echo "Building Express Client...";
# & echo "--------------------------------------------------------------------------------";

# $elapsed = [System.Diagnostics.Stopwatch]::StartNew()
# npm run pr

# write-host "Total Elapsed Time: $($elapsed.Elapsed.ToString())"
# & echo "Express Client is built...";

# 1..5 | ForEach-Object { "Hello $_"; sleep 1 }

# (Measure-Command {
#     1..5 | ForEach-Object { "Hello $_"; sleep 1 } 
# }).Seconds

# 1..5 | ForEach-Object -Parallel { "Hello $_"; sleep 1; } -ThrottleLimit 5 

# (Measure-Command {
#     1..5 | ForEach-Object -Parallel { "Hello $_"; sleep 1; } -ThrottleLimit 5 
# }).Seconds

# $Items = 1..42
# ForEach -Parallel ($Item in $Items) {
#  $Item
# }

# $scriptBlock = { "Hello $_"; sleep 1; }
# $profileFolders = "one", "two", "three"
# foreach ($profilePath in $profileFolders) {
#     Start-RSJob -Name $profile -ScriptBlock $scriptBlock -Throttle 10    
# }

# https://stackoverflow.com/questions/4016451/can-powershell-run-commands-in-parallel
# receive-job (wait-job ($a = start-job { "heyo!" })); 
# remove-job $a or $a = start-job { "heyo!" }; 

# wait-job $a; 
# receive-job $a; 
# remove-job $a


$a = Start-Job  { "Hello a $_"; sleep 1; }
$b = Start-Job  { "Hello b $_"; sleep 1; }
$c = Start-Job  { "Hello c $_"; sleep 1; }

Get-Job

# Wait for it all to complete
While (Get-Job -State "Running")
{

  Start-Sleep 10
}

# Getting the information back from the jobs
Get-Job | Receive-Job

The answer from Steve Townsend is correct in theory but not in practice as @likwid pointed out. My revised code takes into account the job-context barrier--nothing crosses that barrier by default! The automatic $_ variable can thus be used in the loop but cannot be used directly within the script block because it is inside a separate context created by the job.

To pass variables from the parent context to the child context, use the -ArgumentList parameter on Start-Job to send it and use param inside the script block to receive it.

cls
# Send in two root directory names, one that exists and one that does not.
# Should then get a "True" and a "False" result out the end.
"temp", "foo" | %{

  $ScriptBlock = {
    # accept the loop variable across the job-context barrier
    param($name) 
    # Show the loop variable has made it through!
    Write-Host "[processing '$name' inside the job]"
    # Execute a command
    Test-Path "\$name"
    # Just wait for a bit...
    Start-Sleep 5
  }

  # Show the loop variable here is correct
  Write-Host "processing $_..."

  # pass the loop variable across the job-context barrier
  Start-Job $ScriptBlock -ArgumentList $_
}

# Wait for all to complete
While (Get-Job -State "Running") { Start-Sleep 2 }

# Display output from all jobs
Get-Job | Receive-Job

# Cleanup
Remove-Job *

# Wait-Job $a
# Wait-Job $b
# Wait-Job $c
