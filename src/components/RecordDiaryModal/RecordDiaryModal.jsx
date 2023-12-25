import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Meals from '../../icons/meals.svg';
import Icons from '../../icons/icons.svg';
import Snack from '../../img/snack.png';
import { Container } from 'components/Container/Container.styled';
import {
  FormikFieldsWrapper,
  MealWrapper,
  Title,
  TitleWrapper,
  ButtonWrapper,
  ButtonCancel,
  ModalRecord,
  MealPart,
  MealRecordWrap,
  ButtonConfirm,
} from './RecordDiaryModal.styled';
import { AddRecordMeal } from './AddRecordMeal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const RecordDiaryModal = ({
  handleClose,
  open,
  mealName,
  adddiary,
  length,
}) => {
  const [numComponents, setNumComponents] = useState(1);
  const dispatch = useDispatch();
  const generateInitialValues = () => {
    const initialValues = {};

    for (let i = 1; i <= numComponents; i++) {
      initialValues[`${i}-name`] = '';
      initialValues[`${i}-carbonoh`] = '';
      initialValues[`${i}-protein`] = '';
      initialValues[`${i}-fat`] = '';
      initialValues[`${i}-calories`] = '';
    }

    return initialValues;
  };

  const generateSchemaValues = () => {
    const schemasValues = {};

    for (let i = 1; i <= numComponents; i++) {
      schemasValues[`${i}-name`] = Yup.string().required('Required');
      schemasValues[`${i}-carbonoh`] = Yup.number().required('Required');
      schemasValues[`${i}-protein`] = Yup.number().required('Required');
      schemasValues[`${i}-fat`] = Yup.number().required('Required');
      schemasValues[`${i}-calories`] = Yup.number().required('Required');
    }

    return Yup.object().shape(schemasValues);
  };

  const handleAddMore = () => {
    if (numComponents + length < 4) {
      setNumComponents(prevNum => prevNum + 1);
    }
  };

  const handleFormSubmit = values => {
    const formattedEntries = [];

    for (let i = 1; i <= numComponents; i++) {
      const entry = {
        title: values[`${i}-name`],
        calories: Number(values[`${i}-calories`]),
        carbohydrates: Number(values[`${i}-carbonoh`]),
        protein: Number(values[`${i}-protein`]),
        fat: Number(values[`${i}-fat`]),
      };

      formattedEntries.push(entry);
    }

    dispatch(adddiary({ meals: mealName, entries: formattedEntries }));
    handleClose();
  };

  const handleCancel = () => {
    setNumComponents(1);
    handleClose();
  };

  const handleDelete = () => {
    if (numComponents > 1) {
      setNumComponents(prevNum => prevNum - 1);
    }
  };

  const capitalizeFirstLetter = word => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  };

  return (
    <Container>
      <ModalRecord open={open} onClose={handleCancel}>
        <>
          <Formik
            initialValues={generateInitialValues()}
            validationSchema={generateSchemaValues()}
            onSubmit={(values, { setSubmitting }) => {
              handleFormSubmit(values);
              setSubmitting(false);
              setNumComponents(1);
            }}
          >
            {({ values, handleSubmit }) => (
              <Form autoComplete="off" onSubmit={handleSubmit}>
                <MealWrapper>
                  <Title>Record your meal</Title>
                  <FormikFieldsWrapper>
                    <TitleWrapper>
                      {mealName === 'snack' ? (
                        <img
                          src={Snack}
                          alt={'snack'}
                          width="36px"
                          height="36px"
                        ></img>
                      ) : (
                        <svg width="36px" height="36px">
                          <use xlinkHref={`${Meals}#icon-${mealName}`} />
                        </svg>
                      )}
                      <MealPart>{capitalizeFirstLetter(mealName)}</MealPart>
                    </TitleWrapper>

                    {[...Array(numComponents)].map((_, index) => (
                      <AddRecordMeal
                        key={index}
                        idPrefix={index + 1}
                        handleDelete={handleDelete}
                        values={values}
                      />
                    ))}

                    {numComponents + length === 4 ? (
                      <></>
                    ) : (
                      <MealRecordWrap onClick={handleAddMore}>
                        <svg width="16px" height="16px" stroke="#E3FFA8">
                          <use xlinkHref={`${Icons}#icon-add`} />
                        </svg>
                        Add more
                      </MealRecordWrap>
                    )}
                    <ButtonWrapper>
                      <ButtonCancel type="button" onClick={handleCancel}>
                        Cancel
                      </ButtonCancel>
                      <ButtonConfirm type="submit">Confirm</ButtonConfirm>
                    </ButtonWrapper>
                  </FormikFieldsWrapper>
                </MealWrapper>
              </Form>
            )}
          </Formik>
        </>
      </ModalRecord>
    </Container>
  );
};
