
	fetch("https://fakestoreapi.com/products").then((response)=>{
		return response.json();
		 }).then((data) => {

		let bannerHeadeing ="";
		let bannerImage ="";
		let blogData ="";

		data.map((values)=>{
			bannerHeadeing = values.title;
			bannerImage = values.image;
			

    			blogData += `<div class="col-sm-6 col-lg-3">
				<div class="product-inner-col">
				<div class="image_1"><img src="${values.image}"/></div>
				<h6 class="tips_text">${values.title}</h6>
				<h2 class="variations_text "><a href="#">${values.price}</a></h2>
				<p class="ipsum_text">${values.description}</p>
			</div></div>`

			// console.log(bannerHeadeing)
		});

		document.querySelector('.discover_text').innerHTML = bannerHeadeing;
		document.querySelector('.articles_section2 .row').innerHTML = blogData;
		document.querySelector('.banner_section').style.backgroundImage = 'url('+bannerImage+')';

		console.log(bannerImage)
	});


// fetch("https://fakestoreapi.com/products").then((response)=>{
//        // console.log(response)
//         return response.json();
//     }).then((data)=>{
//     //    console.log(data);
//        console.log(data.title);
//         let tableData="";
//         console.log(tableData);
//         data.map((values)=>{
//             tableData += `
// 			values.id
//           <td>${values.title}</td>
//           <td> <img src="${values.thumbnailUrl}"</td>
//           <td> </td>
//         </tr>`;
//         })
//         document.getElementById("table").innerHTML=tableData;
//     })
	
	
	
	


    
   



