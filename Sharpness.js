


function plot_heatmap(){
                       
    var startDate=new Date(document.getElementById("startDate").value);
    console.log(startDate);
    var data_2=startDate.getFullYear()+'-0' + (startDate.getMonth()+1) + '-'+startDate.getDate();
    console.log(data_2);

    var endDate=new Date(document.getElementById("startDate").value);
    console.log(endDate);
    var data_3=endDate.getFullYear()+'-0' + (endDate.getMonth()+1) + '-'+endDate.getDate();
    console.log(data_2);





    //////////////////---1st_Raspberry---/////////////

    var n1=0;

    var Loudness1 = [];
    var Sharpness1 =[];
    var Roughness1 = [];
    var SPL1 =[];
    var PA1 = [];
    var Fluctuation1 =[];


    var l1=0;
    var s1=0;
    var r1=0;
    var spl1=0
    var pa1=0;
    var f1=0;

    //////////////////---2nd_Raspberry---/////////////

    var n2=0;

    var Loudness2 = [];
    var Sharpness2 =[];
    var Roughness2 = [];
    var SPL2 =[];
    var PA2 = [];
    var Fluctuation2 =[];


    var l2=0;
    var s2=0;
    var r2=0;
    var spl2=0
    var pa2=0;
    var f2=0;


    //////////////////---3rd_Raspberry---/////////////

    var n3=0;

    var Loudness3 = [];
    var Sharpness3 =[];
    var Roughness3 = [];
    var SPL3 =[];
    var PA3 = [];
    var Fluctuation3 =[];


    var l3=0;
    var s3=0;
    var r3=0;
    var spl3=0
    var pa3=0;
    var f3=0;

    //////////////////---4th_Raspberry---/////////////

    var n4=0;

    var Loudness4 = [];
    var Sharpness4 =[];
    var Roughness4 = [];
    var SPL4 =[];
    var PA4 = [];
    var Fluctuation4 =[];


    var l4=0;
    var s4=0;
    var r4=0;
    var spl4=0
    var pa4=0;
    var f4=0;    







    var api_url="http://mariola.uv.es:3030/api/nodes/";
    api_url=api_url+'all'+'?'+'dateFrom='+data_2+'&'+'dateTo='+data_3;

    console.log(api_url);
   $.get(api_url, function(data, status){
        data.data.forEach(function(element){

            if(element._id.entityId=='urbauramon-01'){


                console.log(api_url);
                Loudness1.push(element.loudness.$numberDecimal); 
                Sharpness1.push(element.sharpness.$numberDecimal);
                Roughness1.push(element.roughness.$numberDecimal); 
                SPL1.push(element.SPL.$numberDecimal);
                PA1.push(element.pa.$numberDecimal); 
                Fluctuation1.push(element.fluctuation.$numberDecimal);
    
                l1=Number(l1)+Number(element.loudness.$numberDecimal);    
                s1=Number(s1)+Number(element.sharpness.$numberDecimal); 
                r1=Number(r1)+Number(element.roughness.$numberDecimal); 
                spl1=Number(spl1)+Number(element.SPL.$numberDecimal); 
                pa1=Number(pa1)+Number(element.pa.$numberDecimal); 
                f1=Number(f1)+Number(element.fluctuation.$numberDecimal);         
    
                n1=n1+1;
                

       
            }
            if(element._id.entityId=='urbauramon-02'){      
                
                console.log(api_url);
                Loudness2.push(element.loudness.$numberDecimal); 
                Sharpness2.push(element.sharpness.$numberDecimal);
                Roughness2.push(element.roughness.$numberDecimal); 
                SPL2.push(element.SPL.$numberDecimal);
                PA2.push(element.pa.$numberDecimal); 
                Fluctuation2.push(element.fluctuation.$numberDecimal);
    
                l2=Number(l2)+Number(element.loudness.$numberDecimal);    
                s2=Number(s2)+Number(element.sharpness.$numberDecimal); 
                r2=Number(r2)+Number(element.roughness.$numberDecimal); 
                spl2=Number(spl2)+Number(element.SPL.$numberDecimal); 
                pa2=Number(pa2)+Number(element.pa.$numberDecimal); 
                f2=Number(f2)+Number(element.fluctuation.$numberDecimal);         
    
                n2=n2+1;
                
      
            }
            if(element._id.entityId=='urbauramon-03'){     
                
                console.log(api_url);
                Loudness3.push(element.loudness.$numberDecimal); 
                Sharpness3.push(element.sharpness.$numberDecimal);
                Roughness3.push(element.roughness.$numberDecimal); 
                SPL3.push(element.SPL.$numberDecimal);
                PA3.push(element.pa.$numberDecimal); 
                Fluctuation3.push(element.fluctuation.$numberDecimal);
    
                l3=Number(l3)+Number(element.loudness.$numberDecimal);    
                s3=Number(s3)+Number(element.sharpness.$numberDecimal); 
                r3=Number(r3)+Number(element.roughness.$numberDecimal); 
                spl3=Number(spl3)+Number(element.SPL.$numberDecimal); 
                pa3=Number(pa3)+Number(element.pa.$numberDecimal); 
                f3=Number(f3)+Number(element.fluctuation.$numberDecimal);         
    
                n3=n3+1;
                
    
            }
            if(element._id.entityId=='urbauramon-04'){   
                
                console.log(api_url);
                Loudness4.push(element.loudness.$numberDecimal); 
                Sharpness4.push(element.sharpness.$numberDecimal);
                Roughness4.push(element.roughness.$numberDecimal); 
                SPL4.push(element.SPL.$numberDecimal);
                PA4.push(element.pa.$numberDecimal); 
                Fluctuation4.push(element.fluctuation.$numberDecimal);
    
                l4=Number(l4)+Number(element.loudness.$numberDecimal);    
                s4=Number(s4)+Number(element.sharpness.$numberDecimal); 
                r4=Number(r4)+Number(element.roughness.$numberDecimal); 
                spl4=Number(spl4)+Number(element.SPL.$numberDecimal); 
                pa4=Number(pa4)+Number(element.pa.$numberDecimal); 
                f4=Number(f4)+Number(element.fluctuation.$numberDecimal);         
    
                n4=n4+1;
                
       
            }
        });

        console.log(l1+'-------'+s1+'------------'+spl1+'-------------'+pa1+'------'+f1);

        l1=l1/n1;
        s1=s1/n1;
        r1=r1/n1;
        pa1=pa1/n1;
        spl1=spl1/n1/10;
        f1=f1/n1;

        console.log(l1+'-------'+s1+'------------'+spl1+'-------------'+pa1+'------'+f1);

        console.log(l2+'-------'+s2+'------------'+spl2+'-------------'+pa2+'------'+f2);

        l2=l2/n2;
        s2=s2/n2;
        r2=r2/n2;
        pa2=pa2/n2;
        spl2=spl2/n1/10;
        f2=f2/n2;

        console.log(l2+'-------'+s2+'------------'+spl2+'-------------'+pa2+'------'+f2);   

        console.log(l3+'-------'+s3+'------------'+spl3+'-------------'+pa3+'------'+f3);

        l3=l3/n3;
        s3=s3/n3;
        r3=r3/n3;
        pa3=pa3/n3;
        spl3=spl3/n3/10;
        f3=f3/n3;

        console.log(l3+'-------'+s3+'------------'+spl3+'-------------'+pa3+'------'+f3);      

        console.log(l4+'-------'+s4+'------------'+spl4+'-------------'+pa4+'------'+f4);

        l4=l4/n4;
        s4=s4/n4;
        r4=r4/n4;
        pa4=pa4/n4;
        spl4=spl4/n4/10;
        f4=f4/n4;

        console.log(l4+'-------'+s4+'------------'+spl4+'-------------'+pa4+'------'+f4);     

    // Data obtained from devices/API
    console.log(s1+'--'+s2+'--'+s3+'--'+s4);
    if(isNaN(s1)){
        s1=0;
    }
    if(isNaN(s2)){
        s2=0;
    }
    if(isNaN(s3)){
        s3=0;
    }
    if(isNaN(s4)){
        s4=0;
    }
    console.log(s1+'--'+s2+'--'+s3+'--'+s4);
    var dev_data = {
        z: [ Number(s1),Number(s2),Number(s3),Number(s4)],     
        x: [ 35, 74, 3, 96],
        y: [ 41, 30, 24, 22]
    };
           
    // Calculate the variogram using the data of the IoT-Nodes
    var variogram = calculate_variogram(dev_data);
    
    // Generate a grid (Matrix [100x50])
    var grid = generate_grid(100,50,1);
    
    // Predict the value of the "parameter" in each point of the grid using the variogram
    var points =predict_points(variogram,grid);
    
    // Data format for Plotly
    var data =[{
        x: points.x,
        y: points.y,
        z: points.z,
        zsmooth: 'best',
        type: 'heatmap',
        alpha: 0.6,
        colorscale: 'RdBu'
        
    }];
    
    // Render the plot
    Plotly.newPlot('heatmapContainer', data);
});
}

function calculate_variogram(dev_data){
    var model = "exponential";
    var sigma2 = 0, alpha = 100;
    var variogram = kriging.train(dev_data.z, dev_data.x, dev_data.y, model, sigma2, alpha);
    
    return variogram;
}

// z[Y][X]
function generate_grid(X,Y,step){
    var grid = {};
    grid.x = Array(X).join(0).split(0).map((v, i) => i + 0); // [0, 1, 2, 3, ...,X-1];
    grid.y = Array(Y).join(0).split(0).map((v, i) => i + 0); // [0, 1, 2, 3, ...,Y-1];
    grid.z = Array(Y);   
    
    for (ny = 0; ny < Y; ny++){
        grid.z[ny] = Array(X).join(0).split(0).map((v, i) => 0); // [0, 1, 2, 3, 
    }
    
    return grid;
}

function predict_points(variogram,grid){
    for (ny = 0; ny < grid.y.length; ny++){
        for (nx = 0; nx < grid.x.length; nx++){
            grid.z[ny][nx] = kriging.predict(grid.x[nx], grid.y[ny] , variogram);
        }   
    }
    return grid;
}

window.onload = function() {
    document.getElementById("load_map").onclick = plot_heatmap;
}