import { AboutSectionData } from './about-section-data.model';
import { AddressSectionData } from './address-section-data.model';
import { FeaturesSectionData } from './features-section-data.model'

export interface AppData {
  features: FeaturesSectionData;
  about: AboutSectionData;
  address: AddressSectionData;
}
