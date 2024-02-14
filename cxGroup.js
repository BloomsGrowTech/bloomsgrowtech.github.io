var Cxgroup;

const customerInfo = {};
const cxGrId = {};
var storeId = 98501509;
var public_token = 'Bearer public_PUb7yJJDWc5RYj1nL7aXHJFT5j5bn2hW';
var requestURLGroups = 'https://app.ecwid.com/api/v3/'+storeId+'/customer_groups';
//FOR LIVE SITE const products = ['613224679','613222359','613224661','613222163','613225187','613226056','JACKS>>','613233550','613231400','613223218','613232937','613221650','613234818','613223104']; //Calmag, Cleanse, Fade, Bloom, Core, Grow // Jacks Part A, B, Bloom, Epsom, RO, Ultra Violet, Finish
//For test site
const products = ['625285756','625238809']
//Get the customer and their group
function getGroups(){
    const grOPT = {
        method: 'GET',
        headers: {accept:'application/json', Authorization: public_token}
    };
    
    fetch(requestURLGroups, grOPT)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(customerInfo = response)
        .catch(err => console.error(err));
    cxGrId = JSON.stringify(customerInfo.customerGroupId);
    
    //Some magic or some shit
}

function run(){
    getGroups();
    if(cxGrId != ''){
        for(ids of cxGrId){
            if(customerInfo.customerGroup = '23865254'){
                //Get Products and replaces their pricing
                runProducts();
            }
        }
    }else{
        console.log("error collecting groups");
    }
}
//Get the products to be enabled and disabled
function runProducts(){
    //uses product id's to deactivate and activate
    const productToActivate = [];
    const productsToDeactivate = [];
    //for loop required here for each product to activate and deactivate
    
    for(const productID of products){
        var reqURL_Products = 'https://app.ecwid.com/api/v3/'+storeId+'/products/'+productID;
        const Product = {};
        const productGET = {
            method: 'GET',
            headers: {accept:'application/json', Authorization: public_token}
        };
        const productPUT = {
            method: 'PUT',
            headers: {accept:'application/json', 
            Authorization: public_token,
            'content/type':'application/json'
            }
        };

        fetch(reqURL_Products, productGET)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(Product = response)
        .catch(err => console.error(err));
        //Gotta have that double redundancy to change pricing depending on the ID
        if (Product.productID = productID){
            switch(productID){
                //For test site
                case productID = '625285756':
                    Product.price = '185.00';
                    break;
                case productID = '625238809':
                    Product.price = '77.00';
                    break;
                // ////////////////////For Athena////////////////////
                // case productID = '': //For Athena Pro Gro
                //     case Product.variant = '1':
                //         Product.price = '19.2'; 
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '181.00';
                //         break;
                // case productID = '': //For Athena Pro Core
                //     case Product.variant = '1':
                //         Product.price = '19.2'; 
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '181.00';
                //         break;
                // case productID = '': //For Athena Pro Bloom
                //     case Product.variant = '1':
                //         Product.price = '19.2'; 
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '181.00';
                //         break;
                // case productID = '': //For Athena CalMag
                //     case Product.variant = '1':
                //         Product.price = '36.46'; 
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '162.00';
                //         break;
                // case productID = '': //For Athena Cleanse
                //     case Product.variant = '1':
                //         Product.price = '60';
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '243';
                //         break;
                //     case Product.variant = '3':
                //         Product.price = '2268.00'
                //         break;
                // case productID = '': //For Athena Fade
                //     case Product.variant = '1':
                //         Product.price = '36.59';    
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '162'
                //         break;
                //     case Product.variant = '3':
                //         Product.price = '1498';
                //         break;
                // ////////////////////For Jack's////////////////////
                // case productID = '': //For Jack's Part A
                //     case Product.variant = '1':
                //         Product.price = '131.59'; //Variant 1 is 11kg variant for all of jacks
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '29.86';
                //         break;
                // case productID = '': //For Yara Calnit
                //     case Product.variant = '1':
                //         Product.price = '58.50'; 
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '2.34';
                //         break;
                //     case Product.variant = '3':
                //         Product.price = '11.7';
                //         break
                // case productID = '': //For Jack's Bloom
                //     case Product.variant = '1':
                //         Product.price = '165.24';
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '33.61';
                //         break;
                // case productID = '': //For Jack's RO
                //     case Product.variant = '1': 
                //         Product.price = '120.41'; 
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '33.61';
                //         break; 
                // case productID = '': //For Jack's Ultraviolet
                //     case Product.variant = '1': 
                //         Product.price = '187.60'; 
                //         break;
                //     case Product.variant = '2': 
                //         Product.price = '34.46';
                //         break;
                // case productID = '': //For Jack's Finish
                //     case Product.variant = '1':
                //         Product.price = '137.202'; 
                //         break;
                //     case Product.variant = '2':
                //         Product.price = '30.78';
                //         break;
                // case productID = '': //For Epsom Salts
                //     case Product.variant = '2':
                //         Product.price = '9.36';
                //         break;
                //     case Product.variant = '3':
                //         Product.price = '46.8';
                //         break;
            }
            fetch(reqURL_Products, productPUT)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        }
    

    //for loop to deactivate products & activate products ////////////////////If price changing fails

    //Going to attempt to change price even though price is controlled by xSeries. Standby for that
    
    }
}
Ecwid.OnPageLoaded.add(function(page){
    if(page.type == 'CATEGORY'){
        run();
    }
    
});

