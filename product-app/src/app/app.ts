import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from "./components/product";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product-app');
}
