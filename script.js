$(document).ready(function() {

    // checkout
    var checkoutBtn = $("#checkout-btn");
    checkoutBtn.click (function () {
        cart.toggle(200);
    })

    // cart
    var cart = $("#cart")

    // BUY ITEMS LIST
    var chair = new Item (1, "Chair", 15);
    var buyChairBtn = $("#buy-chair-btn");
    buyChairBtn.click (function () {
        addTest(chair);  
    })

    var table = new Item (2, "Table", 30);
    var buyTableBtn = $("#buy-table-btn");
    buyTableBtn.click (function () {
        addTest(table);  
    })

    var bed = new Item (3, "Bed", 145);
    var buyBedBtn = $("#buy-bed-btn");
    buyBedBtn.click (function () {
        addTest(bed);    
    })

    var bookcase = new Item (4, "Bookcase", 35);
    var buyBookcaseBtn = $("#buy-bookcase-btn");
    buyBookcaseBtn.click (function () {
        addTest(bookcase);   
    })

    var plant = new Item (5, "Plant", 2);
    var buyPlantBtn = $("#buy-plant-btn");
    buyPlantBtn.click (function () {
        addTest(plant);  
    })

    var tvBench = new Item (6, "TV bench", 65);
    var buyTVBenchBtn = $("#buy-tv-bench-btn");
    buyTVBenchBtn.click (function () {
        addTest(tvBench);  
    })

    //**********************************EXPERIMENTATION PLAYGROUND**************************************
    // global builder
    function Item (id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = 1;
        this.price = price;
        this.exists = false;
    }

    // TEST PRODUCT DECLARATION
    var test = new Item ("TEST", "test", 10);
    $("#test-add").click(function () {
        addTest(test);  
    })

    // TODO POSSIBILITY TO CHOOSE QUANTITY BEFORE ADDING TO CART
    function addTest (testObj) {
        
        // if item doesn't exist, it's added as a new row
        if (!testObj.exists) {
            $("tbody").append('<tr><th scope="row" id="' + testObj.id + '">' + testObj.id + '</th> <td>' + testObj.name +'</td class="price"><td>'+testObj.price+'</td><td class="qty">' + testObj.qty + '</td><td>' + removeButton + '</td></tr>');  
            //its existance is changed so the program knows there's already one and stops adding new rows
            testObj.exists = true;
        // if the item already exists, we must update its parameters inside the html
        } else {

            // adds 1 of the item
            testObj.qty++;
            console.log("item: " + testObj.name + ", quantity: " + testObj.qty + ", total price of these items: " + testObj.price*testObj.qty)

            //updates shopping cart with new qty
            $("#" + testObj.id).siblings(".qty").html(testObj.qty);            
        }

        // cost of individual product is added to total
        totalCost += testObj.price;
        updateTotalCost();
    }

    // total cost of products
    var totalCost = 0;
    function updateTotalCost () {
        $("#total-cost").html("Total cost: " + totalCost + "€");
    }

    // REMOVE BUTTON DELETES ACTUAL TR
    var removeButton = '<button class="removeBtn btn btn-danger">REMOVE</button>';
    $(document).on('click', '.removeBtn', function(){ 

        //remove price from total count
        var removePrice = $(this).parent().siblings(".price").html();
        totalCost -= removePrice;
        updateTotalCost();

        //remove element row
        $(this).parent().parent().remove();
    })




});
