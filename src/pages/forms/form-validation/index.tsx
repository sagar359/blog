// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import FormValidationBasic from 'src/views/forms/form-validation/FormValidationBasic'
import FormBlogSidebar from 'src/views/forms/form-validation/FormBlogSidebar'

// import FormValidationAsync from 'src/views/forms/form-validation/FormValidationAsync'
// import FormValidationSchema from 'src/views/forms/form-validation/FormValidationSchema'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormValidation = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='' target='_blank'>
              Add Blog Post
            </Link>
          </Typography>
        }
        subtitle={<Typography variant='body2'>Add your new blog </Typography>}
      />
      <Grid item xs={8} md={8}>
        <FormValidationBasic />
      </Grid>
      <Grid item xs={4} md={4}>
        <FormBlogSidebar />
      </Grid>
      {/* <Grid item xs={12}>
        <FormValidationSchema />
      </Grid> */}
      {/* <Grid item xs={12} md={6}>
        <FormValidationAsync />
      </Grid> */}
    </Grid>
  )
}

export default FormValidation
