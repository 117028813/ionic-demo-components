import { NgModule } from '@angular/core';
import { FooComponent } from './foo/foo';
import { TabComponent } from './tab/tab';
@NgModule({
	declarations: [FooComponent,
    TabComponent],
	imports: [],
	exports: [FooComponent,
    TabComponent]
})
export class ComponentsModule {}
