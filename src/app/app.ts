import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { MainPage } from "./main-page/main-page";
import { Blog } from "./blog/blog";
import { NotFound } from "./not-found/not-found";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, MainPage, Blog, NotFound],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment14');
  
}
