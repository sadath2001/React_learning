import Field from './components/Field';
import React, { Suspense } from 'react'
const Component = React.lazy(() => import("./components/Component"))
function App() {
  return (
    <div>
      <Field />
      <Suspense fallback={<p>Loading still...</p>}>
        <Component />
      </Suspense>
    </div>
  );
}


export default App;
