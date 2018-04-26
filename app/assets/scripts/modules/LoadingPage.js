import $ from 'jquery';

class LoadingPage {
  constructor() {
    this.loadingElement = $('.loading-page');
    this.hideLoadingPage();
  }
  hideLoadingPage() {
    this.loadingElement.fadeOut(200).remove();
  }
}

export default LoadingPage;