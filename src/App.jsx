// import ErrorExample from './advance-topics/1-useState/final/1-error-example';
// import UseStateBasics from './advance-topics/1-useState/final/2-useState-basics';
// import UseStateArray from './advance-topics/1-useSta te/setup/3-useState-array';
// import UseStateObject from './advance-topics/1-useState/setup/4-useState-object';
// import UseStateCounter from './advance-topics/1-useState/setup/5-useState-counter';

// import UseEffectBasics from './advance-topics/2-useEffect/setup/1-useEffect-basics';
import UseEffectCleanup from './advance-topics/2-useEffect/setup/2-useEffect-cleanup';
// import UseEffectFetchData from './advance-topics/2-useEffect/setup/3-useEffect-fetch-data';

// import MultipleReturns from './advance-topics/3-conditional-rendering/setup/1-multiple-returns';
// import ShortCircuit from './advance-topics/3-conditional-rendering/setup/2-short-circuit';
// import ShowHide from './advance-topics/3-conditional-rendering/setup/3-show-hide';

// import ControlledInputs from './advance-topics/4-forms/setup/1-controlled-inputs';
// import ControlledMultipleInputs from './advance-topics/4-forms/setup/2-multiple-inputs';
import UseRefBasics from './advance-topics/5-useRef/setup/1-useRef-basics';
import UseStateHookRevision from './advance-topics/hooks-revision/useState';

const App = () => {
  return (
    <div className="container">
      {/* useState */}
      {/* <ErrorExample /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateCounter /> */}

      {/* useEffect */}
      {/* <UseEffectBasics /> */}
      <UseEffectCleanup />
      {/* <UseEffectFetchData /> */}

      {/* Conditional Rendering */}
      {/* <MultipleReturns /> */}
      {/* <ShortCircuit /> */}
      {/* <ShowHide /> */}

      {/* Forms */}
      {/* <ControlledInputs /> */}
      {/* <ControlledMultipleInputs /> */}

      {/* useRef */}
      {/* <UseRefBasics /> */}

      {/* hooks-revision */}
      {/* <UseStateHookRevision /> */}
    </div>
  );
};

export default App;
