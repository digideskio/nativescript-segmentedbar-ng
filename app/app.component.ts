import {Component, ViewChild, ElementRef} from "@angular/core";
import {SegmentedBar} from "ui/segmented-bar";

@Component({
    selector: "my-app",
    template: `
<StackLayout>
<SegmentedBar #bar (selectedIndexChange)="onSelection(bar)">
    <SegmentedBarItem title="Item 1"></SegmentedBarItem>
    <SegmentedBarItem title="Item 2"></SegmentedBarItem>
    <SegmentedBarItem title="Item 3"></SegmentedBarItem>
    <SegmentedBarItem title="Item 4"></SegmentedBarItem>
    <SegmentedBarItem title="Item 5"></SegmentedBarItem>
</SegmentedBar>
<Label [text]="selectedIndex"></Label>
<Button text="Next" (tap)="changeIndex()"></Button>
</StackLayout>
`,
})
export class AppComponent {
    @ViewChild("bar") public bar: ElementRef;

    public selectedIndex = 0;

    onSelection(segmentedBar) {
        console.log("android: " + segmentedBar.selectedIndex);
        this.selectedIndex = segmentedBar.selectedIndex;
    }

    private get nativeBar(): SegmentedBar {
        return this.bar.nativeElement;
    }

    ngAfterViewInit() {
        this.nativeBar.selectedIndex = 0;
    }

    changeIndex() {
        console.log("selectedIndex: " + this.nativeBar.selectedIndex);
        this.nativeBar.selectedIndex = (this.nativeBar.selectedIndex + 1) % 5;
    }
}
