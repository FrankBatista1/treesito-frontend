import { useState, useEffect } from 'react';
import CarouselImg from '../components/CarouseImg';

import { getTreesFromApi, postTreeToApi } from '../services/TreeService';


const HomeView = () => {

    return(
        <CarouselImg/>
    )
}

export default HomeView;