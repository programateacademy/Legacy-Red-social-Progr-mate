import { render } from 'react-three-fiber';
import Name from '../components/ProfileEditor/formInfo/Name';

 it('Prueba Name', () => {
 render(<Name/>)

   const labelName= screen.getByRole('h3',{name:/Nombre/i});
   expect(labelName).toBeInTheDocument();

 })
 