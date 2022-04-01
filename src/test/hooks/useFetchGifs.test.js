import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Pruebas en el hooks useFetchGifs', () => { 

    test('Debe de retornar el estado inicial', async() => { 
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('FMA'));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
     });

     test('Debe retornar un arreglo de img y loading en false', async() => { 
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('FMA'));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
      })

 })