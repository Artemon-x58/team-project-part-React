import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { string, number, mixed } from 'yup';

import SettingImage from 'img/Interactive-learning-experience.png';
import AvatarPic from 'img/Avatar.png';
import DownLoadIcon from 'icons/icons.svg';
import {
  ProfileTitle,
  SetImage,
  ProfileYourName,
  ProfileDescName,
  ProfileNameInput,
  ProfileDescImage,
  ProfileDownloadDesc,
  PhotoDescContainer,
  GenderInput,
  ProfileActivityContainer,
  ActivityDescName,
  ProfileSaveBtn,
  ProfileCancelBtn,
  ProfileButtonContainer,
  ParametrsDesc,
  ProfileDescContainer,
  DesktopContainer,
  DesktopActivity,
  UploadButton,
  ProfilePhotoLabel,
  UploadIconUse,
  UploadIconSvg,
  ErrorMess,
  NameCont,
  GenderDesc,
  GenderContainer,
} from './ProfileMainStyleMobile';

import { selectDataUser } from 'redux/statistics/statisticsSelectors';
import {
  updateAvatar,
  updateUser,
} from 'redux/statistics/statisticsOperations';

const ProfileShema = yup.object({
  name: string()
    .required('Name is required')
    .max(50, 'Name must be at most 50 characters'),
  age: number()
    .required('Age is required')
    .min(1)
    .max(110)
    .positive('Age must be a positive number')
    .min(1)
    .integer('Age must be an integer'),
  height: number()
    .required('Height is required')
    .min(50)
    .max(240)
    .positive('Age must be a positive number'),
  weight: number()
    .required('Weight is required')
    .min(5)
    .max(300)
    .positive('Age must be a positive number'),
  file: mixed(),
});

export const ProfileMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(selectDataUser);

  const initialValues = {
    name: `${userData.name}`,
    age: `${userData.age}`,
    height: `${userData.height}`,
    weight: `${userData.weight}`,
    gender: `${userData.gender}`,
    kef: `${userData.kef}`,
  };

  const handleSubmit = async values => {
    const { name, age, gender, height, weight, kef, file } = values;
    await dispatch(updateUser({ name, age, gender, height, weight, kef }));
    if (file !== undefined) {
      await dispatch(updateAvatar(file));
    }
    navigate('/main');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ProfileShema}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <>
            <ProfileTitle>Profile setting</ProfileTitle>
            <DesktopContainer>
              <SetImage src={SettingImage} alt="Setting" />

              <ParametrsDesc>
                <ProfileDescContainer>
                  <NameCont>
                    <ProfileYourName>Your name</ProfileYourName>
                    <ProfileNameInput type="text" name="name" />
                    <ErrorMess name="name" component="div" />
                  </NameCont>
                  <NameCont>
                    <ProfileDescName>Your photo</ProfileDescName>
                    <PhotoDescContainer>
                      <ProfileDescImage
                        width={36}
                        height={36}
                        src={
                          values.file
                            ? URL.createObjectURL(values.file)
                            : AvatarPic
                        }
                        alt="AvatarPic"
                      />

                      <UploadButton>
                        <UploadIconSvg>
                          <UploadIconUse
                            href={`${DownLoadIcon}#icon-download-avatar`}
                            alt="Download"
                          />
                        </UploadIconSvg>
                        <input
                          type="file"
                          name="file"
                          onChange={event =>
                            setFieldValue('file', event.currentTarget.files[0])
                          }
                          style={{ display: 'none' }}
                        />
                        <ProfilePhotoLabel htmlFor="file">
                          Download new photo
                        </ProfilePhotoLabel>
                      </UploadButton>
                    </PhotoDescContainer>
                  </NameCont>
                </ProfileDescContainer>
                <ProfileDescContainer>
                  <NameCont>
                    <ProfileDescName>Your age</ProfileDescName>
                    <ProfileNameInput type="text" name="age" />
                    <ErrorMess name="age" component="div" />
                  </NameCont>

                  <NameCont>
                    <ProfileDescName>Gender</ProfileDescName>
                    <GenderContainer>
                      <GenderInput type="radio" name="gender" value="male" />
                      <ErrorMess name="radio" component="div" />
                      <GenderDesc>Male</GenderDesc>
                      <GenderInput type="radio" name="gender" value="female" />
                      <ErrorMess name="radio" component="div" />
                      <GenderDesc>Female</GenderDesc>
                    </GenderContainer>
                  </NameCont>
                </ProfileDescContainer>
                <ProfileDescContainer>
                  <NameCont>
                    <ProfileDescName>Height</ProfileDescName>
                    <ProfileNameInput type="text" name="height" />
                    <ErrorMess name="height" component="div" />
                  </NameCont>
                  <NameCont>
                    <ProfileDescName>Weight</ProfileDescName>
                    <ProfileNameInput type="text" name="weight" />
                    <ErrorMess name="weight" component="div" />
                  </NameCont>
                </ProfileDescContainer>
              </ParametrsDesc>
            </DesktopContainer>
            <DesktopActivity>
              <ActivityDescName>Your activity</ActivityDescName>
              <ProfileActivityContainer>
                <GenderInput type="radio" name="kef" value="1.2" />
                <ProfileDownloadDesc>
                  1.2 - if you do not have physical activity and sedentary work
                </ProfileDownloadDesc>
              </ProfileActivityContainer>
              <ProfileActivityContainer>
                <GenderInput type="radio" name="kef" value="1.375" />
                <ProfileDownloadDesc>
                  1.375 - if you do short runs or light gymnastics 1-3 times a
                  week
                </ProfileDownloadDesc>
              </ProfileActivityContainer>
              <ProfileActivityContainer>
                <GenderInput type="radio" name="kef" value="1.55" />
                <ProfileDownloadDesc>
                  1.55 - if you play sports with average loads 3-5 times a week
                </ProfileDownloadDesc>
              </ProfileActivityContainer>
              <ProfileActivityContainer>
                <GenderInput type="radio" name="kef" value="1.725" />
                <ProfileDownloadDesc>
                  1.725 ​​- if you train fully 6-7 times a week
                </ProfileDownloadDesc>
              </ProfileActivityContainer>
              <ProfileActivityContainer>
                <GenderInput type="radio" name="kef" value="1.9" />
                <ProfileDownloadDesc>
                  1.9 - if your work is related to physical labor, you train 2
                  times a day and include strength exercises in your training
                  program
                </ProfileDownloadDesc>
              </ProfileActivityContainer>
            </DesktopActivity>
            <ProfileButtonContainer>
              <ProfileSaveBtn type="submit">Save</ProfileSaveBtn>
              <ProfileCancelBtn type="button" onClick={() => navigate('/main')}>
                Cancel
              </ProfileCancelBtn>
            </ProfileButtonContainer>
          </>
        </Form>
      )}
    </Formik>
  );
};
