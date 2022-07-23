import type { GetServerSideProps, NextPage } from "next";
import { getServerSidePropsForVaultPage } from '@/utils'
import { IPhoto } from "@/types";

import { Grid, Typography } from '@mui/material'
import { Photo } from '@/components'

export interface IFeedPageProps {
  photos: IPhoto[]
}

const Vault: NextPage<IFeedPageProps> = ({ photos }: IFeedPageProps) => {
  return (
    <Grid container flexDirection='column' alignItems='center' xs={12} md={6} marginX='auto' spacing={4} paddingY={10}>
      <Typography component="h1" variant="h3">
        Vault
      </Typography>
      {photos.map((photo) => <Photo photo={photo} key={photo.id} />)}
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async () =>
  getServerSidePropsForVaultPage()

export default Vault;
