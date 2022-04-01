import { getGifs } from '../../helpers/getGifs';


describe('Pruebas con getGifs Fech', () => { 
    
    test('Debe traer 10 elementos', async() => { 
        
        const gifs = await getGifs('Fullmetal Alchemist');
        expect(gifs.length).toBe(10);
     })

 })