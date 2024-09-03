import { Nav, NavItemProps } from 'react-bootstrap-5'

export default function NavItem(props: Omit<NavItemProps, 'as'>) {
  const { children, ...rest } = props
  return (
    <Nav.Item as="li" role="none" {...rest}>
      {children}
    </Nav.Item>
  )
}