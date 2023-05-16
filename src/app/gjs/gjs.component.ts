import { Component, OnInit } from '@angular/core';
import grapesjs from 'node_modules/grapesjs';

@Component({
  selector: 'app-gjs',
  templateUrl: './gjs.component.html',
  styleUrls: ['./gjs.component.scss']
})

export class GjsComponent implements OnInit
{
  editor: any;

  constructor(){ }
  
  ngOnInit()
  { 
    const plugins = ['grapesjs-preset-webpage','grapesjs-plugin-forms'];
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      height: '500px',
      width: 'auto',  
      plugins: plugins,
      pluginsOpts:
      {
        'grapesjs-preset-webpage':{},
        'grapesjs-plugin-forms':{},
      } 
    });
  }
}

