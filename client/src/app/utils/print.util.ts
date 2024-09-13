export function printHtml(id: string) {
    const printElement = document.getElementById(id);
    if (printElement) {
      const printContents = printElement.innerHTML;
      const originalContents = document.body.innerHTML;
  
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();  
    } else {
      console.error(`Element with ID ${id} not found.`);
    }
  }

  export function printPdf(filePath: string) {
    const newWindow = window.open(filePath, '_blank');
    if (newWindow) {
      newWindow.addEventListener('load', () => {
        newWindow.focus();
        newWindow.print();
      });
    } else {
      console.error('Nie udało się otworzyć nowego okna.');
    }
  }