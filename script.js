function calcularTempoNamoro(dataInicio) {
    const inicio = new Date(dataInicio);
    const agora = new Date();
  
    const diff = agora - inicio;
  
    const anos = agora.getFullYear() - inicio.getFullYear();
    const meses = agora.getMonth() - inicio.getMonth();
    const dias = agora.getDate() - inicio.getDate();
    const horas = agora.getHours() - inicio.getHours();
  
    const totalMeses = (agora.getFullYear() - inicio.getFullYear()) * 12 + (agora.getMonth() - inicio.getMonth());
    const totalDias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalHoras = Math.floor(diff / (1000 * 60 * 60));
  
    const anosFinais = Math.floor(totalDias / 365);
    const mesesFinais = totalMeses % 12;
    const diasFinais = totalDias % 30;
    const horasFinais = totalHoras % 24;
  
    document.getElementById("anos").textContent = anosFinais;
    document.getElementById("meses").textContent = mesesFinais;
    document.getElementById("dias").textContent = diasFinais;
    document.getElementById("horas").textContent = horasFinais;
  }
  
  document.getElementById("dataInicio").addEventListener("change", function () {
    const data = this.value;
    if (data) {
      calcularTempoNamoro(data);
      setInterval(() => calcularTempoNamoro(data), 1000 * 60 * 60); // Atualiza a cada hora
    }
  });
  
  // Preview da imagem personalizada
  document.getElementById("imagemInput").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById("imagemPreview").src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  