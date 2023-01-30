import { FC } from 'react'
import Menu from './menu/Menu'
import { firstMenu} from './menu/menu.data'


const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
		</div>
	)
}

export default MenuContainer
