// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const changeContent = () => {
        onToggleShowContent()
      }

      const changeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const changeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="config-controller">
          <div className="config-content">
            <h1 className="heading">Layout</h1>
            <div className="inputs-container">
              <div className="input-content">
                <input
                  value={showContent}
                  onChange={changeContent}
                  type="checkbox"
                  id="content"
                />
                <label className="label" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="input-content">
                <input
                  value={showLeftNavbar}
                  onChange={changeLeftNavbar}
                  type="checkbox"
                  id="leftnavbar"
                />
                <label className="label" htmlFor="leftnavbar">
                  Left Navbar
                </label>
              </div>
              <div className="input-content">
                <input
                  value={showRightNavbar}
                  onChange={changeRightNavbar}
                  type="checkbox"
                  id="rightnavbar"
                />
                <label className="label" htmlFor="rightnavbar">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
