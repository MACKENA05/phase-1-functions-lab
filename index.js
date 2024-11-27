function distanceFromHqInBlocks(blockNumber) {
 const hqBlock = 42 ;
 return Math.abs (blockNumber - hqBlock);
}

function distanceFromHqInFeet(blockNumber) {
    const hqBlock = 42 ;
    return Math.abs ((blockNumber - hqBlock)* 264)
}

function distanceTravelledInFeet(start, destination) {
    return Math .abs ((destination - start)*264)
}

function calculatesFarePrice(start, destination) {
const dist = Math .abs(destination - start)*264;
    if (dist <= 400){
        return 0
    } else if (dist>400 && dist<=2000){
        return (dist-400) * 0.02
    }else if (dist>200 && dist<=2500) {
        return  25
    }else {
        return 'cannot travel that far'
    }
}

