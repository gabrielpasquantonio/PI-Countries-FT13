import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Formik, Form, Field } from "formik";
const [field, meta] = useField(props);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
   
    dispatch(getAllCountries(250, 0));
   
  
}, []);
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const curSelection = ["foo"];
const availableSelection = ["foo", "bar", "john"];

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Formik
      initialValues={{
        names: curSelection
      }}
      render={(
        // we need to use setFieldValue from Formik
        { values, setFieldValue }
      ) => (
        <Form>
          <Field
            component="select"
            name="names"
            // You need to set the new field value
            onChange={evt =>
              setFieldValue(
                "names",
                [].slice
                  .call(evt.target.selectedOptions)
                  .map(option => option.value)
              )
            }
            multiple={true}
          >
            {availableSelection.map(s => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Field>

          {/* just printing out the values */}
          <hr />
          <strong>{JSON.stringify(values)}</strong>
        </Form>
      )}
    />
  </div>
);

render(<App />, document.getElementById("root"));
