export function findParent(intersection){
    let parent = intersection.intersections[0].object.parent
    while (parent.name !=='Scene'){
        if (parent.parent.name ==='Scene'){
            return parent.position
        }
        parent =parent.parent
    }
}