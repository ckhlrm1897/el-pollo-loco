class StatusBar extends DrawableObject {

    quantity;

    resolveImageIndex() {
        if (this.quantity == 0) {
            return 1;
        } else if (this.quantity > 1) {
            return 2;
        } else if (this.quantity > 2) {
            return 3;
        } else if (this.quantity > 3) {
            return 4;
        } else if (this.quantity > 4) {
            return 5;
        } else {
            return 0;
        };
    }

    setQuantity(statusImages) {
        // this.percentage = coins;
        let path = statusImages[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

}