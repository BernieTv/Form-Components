import {
  Avatar,
  BoxComponent,
  CheckBoxComponent,
  CustomHeaders,
  CustomizedTables,
  InputTextComponent,
  LikeTagIcons,
  NumericStepperComponent,
  RadioGroupComponent,
  SwitchComponent,
  TableComponent,
} from './components';

function App() {
  return (
    <>
      <div className='container'>
        <div className='components'>
          <SwitchComponent />
          <BoxComponent />
          <CheckBoxComponent />
          <RadioGroupComponent />
          <NumericStepperComponent />
          <Avatar />
          <LikeTagIcons />
          <CustomizedTables />
          <CustomHeaders />
          <TableComponent />
          <InputTextComponent />
        </div>
      </div>
    </>
  );
}

export default App;
