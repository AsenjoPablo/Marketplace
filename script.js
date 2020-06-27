$(document).ready(function() {

    //set prices for products + html
    var chairPrice = 15;
    $("#chair-price").html(chairPrice + "€");

    var tablePrice = 30;
    $("#table-price").html(tablePrice + "€");

    var bedPrice = 145;
    $("#bed-price").html(bedPrice + "€");
    
    var bookcasePrice = 35;
    $("#bookcase-price").html(bookcasePrice + "€");
    
    var plantPrice = 2;
    $("#plant-price").html(plantPrice + "€");
    
    var tvbenchPrice = 60;
    $("#tv-bench-price").html(tvbenchPrice + "€");

    //coding buttons

    //checkout
    var checkoutBtn = $("#checkout-btn");

    checkoutBtn.click (function () {
        cart.toggle(200);
    })

    //product buttons
    var buyChairBtn = $("#buy-chair-btn")
    var buyTableBtn = $("#buy-table-btn")
    var buyBedBtn = $("#buy-bed-btn")
    var buyBookcaseBtn = $("#buy-bookcase-btn")
    var buyPlantBtn = $("#buy-plant-btn")
    var buyTVBenchBtn = $("#buy-tv-bench-btn")

    // cart
    var cart = $("#cart")

    // ADD TO CART FUNCTIONS

    var counterTable = 0;
    var chairQty = 0;
    var tableQty = 0;
    var bedQty = 0;
    var bookcaseQty = 0;
    var plantQty = 0;
    var tvbenchQty = 0;

    // REMOVE BUTTON DELETES ACTUAL TR
    var removeButton = '<button class="removeBtn btn btn-danger">REMOVE</button>';

    $(document).on('click', '.removeBtn', function(){ 
        $(this).parent().parent().remove();
   })

   // TODO REMOVE TOTALPRICE - PRODUCT

    // BUY ITEMS LIST
    buyChairBtn.click (function () {
        totalCost += chairPrice;
        console.log("added chair");
        updateTotalCost ();

        //table add functions
        counterTable++;
        chairQty++;
        $("tbody").append('<tr><th class="counterProd" scope="row">' + counterTable + '</th> <td>Chair</td><td>'+chairPrice+'</td><td>' + chairQty + '</td><td>' + removeButton + '</td></tr>');
    })

    buyTableBtn.click (function () {
        totalCost += tablePrice;
        console.log("added table")
        updateTotalCost ();

        //table add functions
        counterTable++;
        tableQty++;
        $("tbody").append('<tr><th scope="row">' + counterTable + '</th> <td>Table</td><td>'+tablePrice+'</td><td>' + tableQty + '</td><td>' + removeButton + '</td></tr>');
    })

    buyBedBtn.click (function () {
        totalCost += bedPrice;
        console.log("added bed")
        updateTotalCost ();        
        
        //table add functions
        counterTable++;
        bedQty++;
        $("tbody").append('<tr><th scope="row">' + counterTable + '</th> <td>Bed</td><td>'+bedPrice+'</td><td>' + bedQty + '</td><td>' + removeButton + '</td></tr>');   
    })

    buyBookcaseBtn.click (function () {
        totalCost += bookcasePrice;
        console.log("added bookcase")
        updateTotalCost ();
                
        //table add functions
        counterTable++;
        bookcaseQty++;
        $("tbody").append('<tr><th scope="row">' + counterTable + '</th> <td>Bookcase</td><td>'+bookcasePrice+'</td><td>' + bookcaseQty + '</td><td>' + removeButton + '</td></tr>');   
    })

    buyPlantBtn.click (function () {
        totalCost += plantPrice;
        console.log("added plant")
        updateTotalCost ();
                
        //table add functions
        counterTable++;
        plantQty++;
        $("tbody").append('<tr><th scope="row">' + counterTable + '</th> <td>Plant</td><td>'+plantPrice+'</td><td>' + plantQty + '</td><td>' + removeButton + '</td></tr>');  
    })

    buyTVBenchBtn.click (function () {
        totalCost += tvbenchPrice;
        console.log("added tv bench")
        updateTotalCost ();
                
        //table add functions
        counterTable++;
        tvbenchQty++;
        $("tbody").append('<tr><th scope="row">' + counterTable + '</th> <td>TV bench</td><td>'+tvbenchPrice+'</td><td>' + tvbenchQty + '</td><td>' + removeButton + '</td></tr>');  
    })

    // total cost of products

    var totalCost = 0;

    function updateTotalCost () {
        $("#total-cost").html("Total cost: " + totalCost + "€");
    }

    


});
