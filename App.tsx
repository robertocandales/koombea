import React from 'react'
import { Provider } from 'react-redux'
import Navigation from './src/navigation/Navigation'
import { store } from './src/state/store'
import AppContainer from './src/shared/components/AppContainer/AppContainer'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppContainer>
          <Navigation />
        </AppContainer>
      </Provider>
    </>
  )
}

export default App
