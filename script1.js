fetch("https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11").then((data)=>{
   // console.log(data);  json format
   return data.json();  // converted to object
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData="";
    objectData.map((values)=>{
        tableData+= ` <tr>
        <td>${values.title}</td>
      </tr>`;
        
    });
    document.getElementById("table_body").
    innerHTML=tableData;
})
