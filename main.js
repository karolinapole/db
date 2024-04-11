let table = document.querySelector(".table");
        let workbook = XLSX.read(await (await fetch("PokeTCG.xlsx")).arrayBuffer());
        console.log(workbook);
        let worksheet = workbook.SheetNames;
        worksheet.forEach(name => {
            let html = XLSX.utils.sheet_to_html(workbook.Sheets[name]);
            table.innerHTML += `
                    <h3>${name}</h3>${html}
                    `;
        })
    
