$port = 5173

# Procura processos usando a porta
$process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue

if ($process) {
    Write-Host "Matando processo na porta $port..."
    $processId = $process.OwningProcess
    Stop-Process -Id $processId -Force
    Write-Host "Processo $processId finalizado!"
} else {
    Write-Host "Nenhum processo na porta $port."
}
