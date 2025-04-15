import stylesSwitch from '@/styles/switch.module.css'

const HeaderSwitch = ({
  isChecked,
  handleToggle,
}: {
  isChecked: boolean
  handleToggle: () => void
}) => (
  <div className={stylesSwitch.switch}>
    <label className={stylesSwitch.switch__wrapper}>
      <input type='checkbox' checked={isChecked} onChange={handleToggle} />
      <span className={stylesSwitch.switch__slider} />
      <div />
    </label>
  </div>
)

export default HeaderSwitch
