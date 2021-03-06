import Product from "./Product";

class Phone extends Product {

}

class PhoneDomAdapter extends Phone {
    /**
     * attribute attribute-camera_back
     * attribute attribute-camera_front
     * attribute attribute-condition
     * attribute attribute-display_size_mobile
     * attribute attribute-model
     * attribute attribute-network_connections
     * attribute attribute-operating_system
     * attribute attribute-operating_system_version
     * attribute attribute-phone_features
     * attribute attribute-pixel_ppi
     * attribute attribute-processor_type
     * attribute attribute-ram_memory
     * attribute attribute-resolution
     * attribute attribute-screen_type
     * attribute attribute-storage_capacity_new
     * attribute attribute-type_of_battery
     * attribute attribute-video_resolution
     * attribute attribute-warranty
     * attribute attribute-warranty_text
     * attribute attribute-warranty_type
     * <h1 class="product-info-name">
     * Price data: dom.scripts[29]
     * Product data: dom.scripts[27]
     * @param dom
     */
    constructor(dom) {
        super();
        const data = new Map();
        const productData = Product.getProductData(dom);
        data.set("cameraBack", dom.getElementsByClassName("attribute-camera_back"));
        data.set("cameraFront", dom.getElementsByClassName("attribute-camera_front"));
        data.set("condition", dom.getElementsByClassName("attribute-condition"));
        data.set("displaySizeMobile", dom.getElementsByClassName("attribute-display_size_mobile"));
        data.set("model", dom.getElementsByClassName("attribute-model"));
        data.set("networkConnections", dom.getElementsByClassName("attribute-network_connections"));
        data.set("operatingSystem", dom.getElementsByClassName("attribute-operating_system"));
        data.set("operatingSystemVersion", dom.getElementsByClassName("attribute-operating_system_version"));
        data.set("phoneFeatures", dom.getElementsByClassName("attribute-phone_features"));
        data.set("pixelPpi", dom.getElementsByClassName("attribute-pixel_ppi"));
        data.set("processorType", dom.getElementsByClassName("attribute-processor_type"));
        data.set("ramMemory", dom.getElementsByClassName("attribute-ram_memory"));
        data.set("resolution", dom.getElementsByClassName("attribute-resolution"));
        data.set("screenType", dom.getElementsByClassName("attribute-screen_type"));
        data.set("storageCapacityNew", dom.getElementsByClassName("attribute-storage_capacity_new"));
        data.set("batteryType", dom.getElementsByClassName("attribute-type_of_battery"));
        data.set("videoResolution", dom.getElementsByClassName("attribute-video_resolution"));
        data.set("warranty", dom.getElementsByClassName("attribute-warranty"));
        data.set("warrantyText", dom.getElementsByClassName("attribute-warranty_text"));
        data.set("warrantyType", dom.getElementsByClassName("attribute-warranty_type"));

        data.forEach((element, key) => {
            this[key] = (element.length > 0) ? element[0].innerText.trim(): "N/A";
        });
        this.name = productData["pdt_name"];
        this.price = productData["pdt_price"];
        this.category = productData["pdt_category"];
        this.currency = productData["pdt_currency"];
        this.photo = productData["pdt_photo"];
        this.id = productData["pdt_sku"];
        this.simpleSku = productData["pdt_simplesku"];
        // console.log(this);
    }
}

export {Phone, PhoneDomAdapter};