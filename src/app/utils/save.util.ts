import { inject } from "@angular/core";
import { FileSystemService } from "@ardium-ui/devkit";

export function saveFileFromHTML(elementId: string){
    let fileService = inject(FileSystemService);
    const element = document.getElementById(elementId);
    console.log(element);
    if (element) {
        // Limit the content to a specific length
        const content = encodeURIComponent(element.innerText);
        fileService.saveAs(content,{
            fileName: 'pdfFile.pdf',
            types: [{description: 'Plik PDF', accept: {'application/pdf': ['.pdf']}}]
        }
        )
        
    }
}