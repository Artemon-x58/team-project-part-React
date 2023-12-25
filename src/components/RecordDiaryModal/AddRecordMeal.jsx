import { useFormikContext } from 'formik';
import {
  Input,
  InputWrapper,
  SmallWrap,
  ErrorMsg,
  ErrWrap,
  ErrorMsgSmall,
} from './RecordDiaryModal.styled';
import Icons from '../../icons/icons.svg';

export const AddRecordMeal = ({ handleDelete, idPrefix }) => {
  const { setFieldValue, values } = useFormikContext();
  const generateId = field => `${idPrefix}-${field}`;
  const { touched, errors } = useFormikContext();
  const handleChange = (fieldName, value) => {
    setFieldValue(fieldName, value);
  };
  const hasError = fieldName => {
    return touched[fieldName] && errors[fieldName] ? 'true' : 'false';
  };
  const handleInputChange = (fieldName, e) => {
    handleChange(fieldName, e.target.value);
  };

  const handleClean = () => {
    setFieldValue(generateId('name'), '');
    setFieldValue(generateId('carbonoh'), '');
    setFieldValue(generateId('protein'), '');
    setFieldValue(generateId('fat'), '');
    setFieldValue(generateId('calories'), '');
    handleDelete();
  };
  return (
    <InputWrapper>
      <ErrWrap>
        <label htmlFor={generateId('name')}></label>

        <Input
          type="text"
          id={generateId('name')}
          name={generateId('name')}
          placeholder="The name of the product or dish"
          value={values[generateId('name')] || ''}
          isvalue={'name'}
          err={hasError(generateId('name'))}
          onChange={e => handleInputChange(generateId('name'), e)}
        />
        <ErrorMsg name={generateId('name')} component="div" />
      </ErrWrap>
      <ErrWrap>
        <label htmlFor={generateId('carbonoh')} aria-hidden="true"></label>
        <Input
          type="number"
          id={generateId('carbonoh')}
          name={generateId('carbonoh')}
          placeholder="Carbonoh."
          isvalue={'carbonoh'}
          err={hasError(generateId('carbonoh'))}
          value={values[generateId('carbonoh')] || ''}
          onChange={e => handleInputChange(generateId('carbonoh'), e)}
        />
        <ErrorMsg name={generateId('carbonoh')} component="div" />
      </ErrWrap>
      <ErrWrap>
        <label htmlFor={generateId('protein')}></label>
        <Input
          type="number"
          id={generateId('protein')}
          name={generateId('protein')}
          placeholder="Protein"
          value={values[generateId('protein')] || ''}
          isvalue={'protein'}
          err={hasError(generateId('protein'))}
          onChange={e => handleInputChange(generateId('protein'), e)}
        />
        <ErrorMsg name={generateId('protein')} component="div" />
      </ErrWrap>

      <SmallWrap>
        <ErrWrap>
          <label htmlFor={generateId('fat')}></label>
          <Input
            type="number"
            id={generateId('fat')}
            name={generateId('fat')}
            placeholder="Fat"
            isvalue={'fat'}
            err={hasError(generateId('fat'))}
            value={values[generateId('fat')] || ''}
            onChange={e => handleInputChange(generateId('fat'), e)}
          />
          <ErrorMsgSmall
            name={generateId('fat')}
            isvalue={'fat'}
            component="div"
          />
        </ErrWrap>
        <ErrWrap>
          <label htmlFor={generateId('calories')}></label>
          <Input
            type="number"
            id={generateId('calories')}
            name={generateId('calories')}
            placeholder="Calories"
            isvalue={'calories'}
            err={hasError(generateId('calories'))}
            value={values[generateId('calories')] || ''}
            onChange={e => handleInputChange(generateId('calories'), e)}
          />
          <ErrorMsgSmall
            name={generateId('calories')}
            isvalue={'calories'}
            component="div"
          />
        </ErrWrap>

        <svg width="20px" height="20px" stroke="#E3FFA8" onClick={handleClean}>
          <use xlinkHref={`${Icons}#icon-basket`} />
        </svg>
      </SmallWrap>
    </InputWrapper>
  );
};
