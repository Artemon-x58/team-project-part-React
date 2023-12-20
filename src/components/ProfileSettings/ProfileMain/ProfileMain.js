import { Formik, Form } from 'formik';

import SettingImage from '../../../img/Interactive-learning-experience.png';
import AvatarPic from '../../../img/Avatar.png';
import DownLoadIcon from '../../../icons/icons.svg'
import {  ProfileTitle, SetImage, ProfileYourName, ProfileDescName, ProfileNameInput, ProfileDescImage, ProfileDownloadDesc, PhotoDescContainer,  GenderInput, ProfileActivityContainer, ActivityDescName, ProfileSaveBtn, ProfileCancelBtn, ProfileButtonContainer,  ParametrsDesc, ProfileDescContainer,  DesktopContainer, DesktopActivity, UploadButton,  ProfilePhotoLabel, UploadIconUse, UploadIconSvg, ErrorMess, NameCont, GenderDesc, GenderContainer  } from './ProfileMainStyleMobile'
import {  handleSubmit, initialValues } from '../ProfileFormik/ProfileFormik';
import { ProfileShema } from '../ProfileValidation/ProfileValidation';



export const ProfileMain = () => {
 
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}  validationSchema={ProfileShema}>
   {({ resetForm, values, setFieldValue }) => (

      
        <Form>
        <>
        
  <ProfileTitle>Profile setting</ProfileTitle>
  <DesktopContainer>
  <SetImage src={SettingImage} alt="Setting"/>

  <ParametrsDesc>
  <ProfileDescContainer>
       <NameCont>
            <ProfileYourName>Your name</ProfileYourName>
            <ProfileNameInput type='text' name='name' />
            <ErrorMess name='name' component="div"/>
          
            </NameCont>
            <NameCont>
            <ProfileDescName>Your photo</ProfileDescName>
            <PhotoDescContainer>
             
                <ProfileDescImage width={36} height={36}  src={values.file ? URL.createObjectURL(values.file) : AvatarPic}alt="AvatarPic" />
         
                <UploadButton>
                  <UploadIconSvg>
                <UploadIconUse href={`${DownLoadIcon}#icon-download-avatar`} alt="Download" />
                </UploadIconSvg>
                <input type="file" name="file"  onChange={(event) => setFieldValue('file', event.currentTarget.files[0])}  style={{ display: 'none' }} />
                <ProfilePhotoLabel htmlFor="file">Download new photo</ProfilePhotoLabel>
              </UploadButton>

                     
            </PhotoDescContainer>
    
            </NameCont>
          
            </ProfileDescContainer>
            <ProfileDescContainer>
            <NameCont>
            <ProfileDescName>Your age</ProfileDescName>
            <ProfileNameInput type='text' name='age' />
            <ErrorMess name='age' component="div"/>
            </NameCont>
      
          


<NameCont>
<ProfileDescName>Gender</ProfileDescName>
<GenderContainer>
<GenderInput type="radio" name="gender"  value="male" />
<ErrorMess name='radio' component="div" />
<GenderDesc>Male</GenderDesc>
<GenderInput type="radio" name="gender"  value="female" />
<ErrorMess name='radio' component="div"/>
<GenderDesc>Female</GenderDesc>


</GenderContainer>
</NameCont>
</ProfileDescContainer>
<ProfileDescContainer>
<NameCont>
<ProfileDescName>Height</ProfileDescName>
<ProfileNameInput type='text' name='height'/>
<ErrorMess name='height' component="div"/>
</NameCont>
<NameCont>
<ProfileDescName>Weight</ProfileDescName>
<ProfileNameInput type='text' name='weight'/>
<ErrorMess name='weight' component="div"/>
</NameCont>


</ProfileDescContainer>
</ParametrsDesc>

</DesktopContainer>
<DesktopActivity>
<ActivityDescName>Your activity</ActivityDescName>
<ProfileActivityContainer>

<GenderInput type="radio" name="kef" value= "1.2" />
<ProfileDownloadDesc>1.2 - if you do not have physical activity and sedentary work</ProfileDownloadDesc>
</ProfileActivityContainer>
<ProfileActivityContainer>
<GenderInput type="radio" name="kef" value= "1.375" />
<ProfileDownloadDesc>1.375 - if you do short runs or light gymnastics 1-3 times a week</ProfileDownloadDesc>
</ProfileActivityContainer>
<ProfileActivityContainer>
<GenderInput type="radio" name="kef" value= "1.55" />
<ProfileDownloadDesc>1.55 - if you play sports with average loads 3-5 times a week</ProfileDownloadDesc>
</ProfileActivityContainer>
<ProfileActivityContainer>
<GenderInput type="radio" name="kef" value= "1.725" />
<ProfileDownloadDesc>1.725 ​​- if you train fully 6-7 times a week</ProfileDownloadDesc>
</ProfileActivityContainer>
<ProfileActivityContainer>
<GenderInput type="radio" name="kef" value= "1.9"/>
<ProfileDownloadDesc>1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program</ProfileDownloadDesc>
</ProfileActivityContainer>
</DesktopActivity>
<ProfileButtonContainer>
  
<ProfileSaveBtn type='submit'>Save</ProfileSaveBtn>
<ProfileCancelBtn   type='button' onClick={() => resetForm()}>Cancel</ProfileCancelBtn>
</ProfileButtonContainer>


  </>
  </Form>
  )}
  </Formik>

    )
}