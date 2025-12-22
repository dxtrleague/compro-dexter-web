import { Partner } from '@/types/partner';

import antiKode from "@/public/assets/partners/antikode.jpg";
import bayarinID from "@/public/assets/partners/bayarinid.jpg";
import evorts from "@/public/assets/partners/evorts.png";
import justAbout from "@/public/assets/partners/justabout.jpg";
import meta from "@/public/assets/partners/metatech.jpg";
import pulsa from "@/public/assets/partners/mobilepulsa.png";
import sagara from "@/public/assets/partners/sagara.png";
import sixtyTwo from "@/public/assets/partners/sixtytwo.png";
import sonia from "@/public/assets/partners/sonia.png";
import sprint from "@/public/assets/partners/sprint.png";
import tic from "@/public/assets/partners/tic.jpg";

export const partnerData: Partner[] = [
  {
    id: 1,
    name: "Client One",
    logo: sagara.src,
  },
  {
    id: 2,
    name: "Client Two",
    logo: meta.src,
  },
  {
    id: 3,
    name: "Client Three",
    logo: sprint.src,
  },
  {
    id: 4,
    name: "Client Four",
    logo: bayarinID.src,
  },
  {
    id: 5,
    name: "Client Five",
    logo: antiKode.src,
  },
  {
    id: 6,
    name: "Client Six",
    logo: sixtyTwo.src,
  },
  {
    id: 7,
    name: "Client Seven",
    logo: sonia.src,
  },
  {
    id: 8,
    name: "Client Eight",
    logo: tic.src,
  },
  {
    id: 9,
    name: "Client Nine",
    logo: justAbout.src,
  },
  {
    id: 10,
    name: "Client Ten",
    logo: pulsa.src,
  },
  {
    id: 11,
    name: "Client Eleven",
    logo: evorts.src,
  }
];