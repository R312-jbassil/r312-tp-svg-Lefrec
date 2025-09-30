import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


export async function getAllSVG() {
    try {
        const SVGs = await pb.collection('SavedSVG').getFullList();
        return SVGs
    } catch (error) {
        return {
            success : false,
            message : "Problème avec le pocketbase"
        }
    }
}

export async function getSVG(id) {
    try {
        const SVG = await pb.collection('SavedSVG').getOne(id);
        return SVG
    } catch (error) {
        return {
            success : false,
            message : "Problème avec le pocketbase"
        }
    }
}