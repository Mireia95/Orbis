import './ButtonLinkExternal.css'

const ButtonLinkExternal = ({
  url,
  icon = true,
  iconURL = 'https://res.cloudinary.com/dr2vohk2z/image/upload/v1751194769/Orbis/external-link_zavd8u.png',
  text = '',
  target = 'blank'
}) => {
  return (
    <a href={url} target={target} className='extLink flex'>
      {text} {icon ? <img src={iconURL} alt='link' /> : null}
    </a>
  )
}

export default ButtonLinkExternal
