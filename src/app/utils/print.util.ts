export function print(id: string) {
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
  