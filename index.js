function sum() {
    const numSneakers = document.getElementById("numSneakers")
    const numSocks = document.getElementById("numSocks");
    const numBag = document.getElementById("numBag");
    const PSneakers = document.getElementById("PSneakers");
    const PSocks = document.getElementById("PSocks");
    const PBag = document.getElementById("PBag");
    const total = document.getElementById("total");

    total.innerHTML = numSneakers.innerHTML * PSneakers.innerHTML + numSocks.innerHTML * PSocks.innerHTML + numBag.innerHTML * PBag.innerHTML

}

function addSneakers() {
    const numSneakers = document.getElementById("numSneakers")

    numSneakers.innerHTML++
        sum()
}

function addSocks() {
    let numSocks = document.getElementById("numSocks");

    numSocks.innerHTML++
        sum()

}

function addBag() {
    var numBag = document.getElementById("numBag");

    numBag.innerHTML++
        sum()
}

function removeSneakers() {
    var numSneakers = document.getElementById("numSneakers");

    if (numSneakers.innerHTML > 0) {
        numSneakers.innerHTML--
            sum()
    } else if (numSneakers.innerHTML == 0) {
        numSneakers.innerHTML = 0
        sum()
    }

}

function removeSocks() {
    var numSocks = document.getElementById("numSocks");

    if (numSocks.innerHTML > 0) {
        numSocks.innerHTML--
            sum()
    } else if (numSocks.innerHTML == 0) {
        numSocks.innerHTML = 0
        sum()
    }

}

function removeBag() {
    var numBag = document.getElementById("numBag");

    if (numBag.innerHTML > 0) {
        numBag.innerHTML--
            sum()
    } else if (numBag.innerHTML == 0) {
        numBag.innerHTML = 0
        sum()
    }
}

function delete1() {
    const numSneakers = document.getElementById("numSneakers")

    document.getElementsByClassName("article1")[0].style.display = "none";
    document.getElementsByClassName("ray1")[0].style.display = "none";

    numSneakers.innerHTML = "0"
    sum()
}

function delete2() {
    const numSocks = document.getElementById("numSocks");

    document.getElementsByClassName("article2")[0].style.display = "none";
    document.getElementsByClassName("ray2")[0].style.display = "none";

    numSocks.innerHTML = "0"
    sum()
}

function delete3() {
    const numBag = document.getElementById("numBag");

    document.getElementsByClassName("article3")[0].style.display = "none"

    numBag.innerHTML = "0"
    sum()
}