import { Grid } from "@mui/material"
import Banner from "../../components/dashboard/banner/Banner"
import Categories from "../../components/dashboard/categories/Categories"

const Dashboard = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>

        <Grid item lg={10} sm={10} xs={12}>
          posts
        </Grid>
      </Grid>
    </>
  )
}
export default Dashboard
