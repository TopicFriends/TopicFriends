export class MapsPopupService {
  public openMapPopup(map, popup, popupContent) {
    if (map.lastOpen != null) {
      map.lastOpen.close();
    }

    map.lastOpen = popup;
    popupContent.loadUserProfile();
    popup.open();
  }

  public closeMapPopup(map, popup) {
    map.lastOpen = popup;
    setTimeout(() => { popup.close();}, 100);
  }
}
