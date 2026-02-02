import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { Blog } from './blog/blog';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:'', component: MainPage},
    {path:'blog', component: Blog},
    {path:'**', component: NotFound},
];
